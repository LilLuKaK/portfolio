/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useRef, useMemo, useLayoutEffect, useEffect } from "react";
import { Color } from "three";

const hexToNormalizedRGB = (hex) => {
  hex = hex.replace("#", "");
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

/** Plano que actualiza el shader y suaviza la velocidad hacia el objetivo */
const SilkPlane = forwardRef(function SilkPlane(
  { uniforms, targetSpeedRef, reactsToAudio, baseSpeed },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_, delta) => {
    // Tiempo del shader
    uniforms.uTime.value += 0.1 * delta;

    // Velocidad: suavizado hacia el objetivo
    const current = uniforms.uSpeed.value;
    const target = reactsToAudio ? targetSpeedRef.current : baseSpeed;
    const lerpFactor = Math.min(1, delta * 3); // suavizado agradable
    uniforms.uSpeed.value = current + (target - current) * lerpFactor;
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

const Silk = ({
  // velocidad base (si no hay audio o se desactiva la reacción)
  speed = 5,
  // rango cuando reacciona al audio (min/max)
  speedMin = 2,
  speedMax = 12,
  reactsToAudio = true,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const meshRef = useRef();
  const targetSpeedRef = useRef(speed); // valor objetivo dinámico

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  // Escucha el evento 'audio-energy' emitido por el reproductor
  useEffect(() => {
    if (!reactsToAudio) return;

    const onEnergy = (e) => {
      const energy = Math.max(0, Math.min(1, e.detail?.energy ?? 0));
      // Mapear energía [0..1] a velocidad [speedMin..speedMax]
      targetSpeedRef.current = speedMin + energy * (speedMax - speedMin);
    };

    window.addEventListener("audio-energy", onEnergy);
    return () => window.removeEventListener("audio-energy", onEnergy);
  }, [reactsToAudio, speedMin, speedMax]);

  return (
    <Canvas dpr={[1, 2]} frameloop="always">
      <SilkPlane
        ref={meshRef}
        uniforms={uniforms}
        targetSpeedRef={targetSpeedRef}
        reactsToAudio={reactsToAudio}
        baseSpeed={speed}
      />
    </Canvas>
  );
};

export default Silk;
