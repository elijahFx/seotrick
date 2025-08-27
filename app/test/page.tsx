// app/test/page.tsx
export default async function Page() {
  // Данные получаются напрямую на сервере
  const res = await fetch('https://coursehunters.by/views', { cache: 'no-store' }); // Для динамических данных
  const data = await res.json();

  return (
    <div>
      <h1>Данные страницы</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}