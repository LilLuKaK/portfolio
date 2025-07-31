export const fetchContactStatus = async () => {
  try {
    const res = await fetch(
      'https://docs.google.com/spreadsheets/d/1xzjmg6DQ7TbiSTYmS-8tA7iUeg8J5RU4-Ixl6JgOEEs/gviz/tq?tqx=out:json'
    );
    const text = await res.text();
    const json = JSON.parse(text.substr(47).slice(0, -2));
    const estado = json.table.rows[0]?.c?.[0]?.v;
    console.log('Valor leído de la hoja:', estado);
    return estado?.toLowerCase() || 'offline';
  } catch (error) {
    console.error('Error fetching contact status:', error);
    return 'offline';
  }
};
