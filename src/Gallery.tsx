import { createSignal, createResource, For, Show, Suspense } from 'solid-js';

import styles from './Gallery.module.css';

interface FakerData {
  title: string;
  description: string;
  url: string;
}

const CATEGORIES = ['any', 'animals', 'architecture', 'nature', 'people', 'tech', 'kittens', 'pokemon'];

export default function Schedule() {
  const [category, setCategory] = createSignal('animals');
  const [quantity, setQuantity] = createSignal(10);

  const [gallery, { refetch }] = createResource(async () => {
    const res = await fetch(`https://fakerapi.it/api/v1/images?_quantity=${quantity()}&_type=${category()}&_height=300`);
    const json = await res.json();

    return json.data;
  });

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        refetch();
      }}>
        <input type="number" value={quantity()} onInput={(event) => { setQuantity(parseInt(event.currentTarget.value, 10)); refetch(); }} />
        <select value={category()} onInput={(event) => { setCategory(event.currentTarget.value); refetch(); }}>
          <For each={CATEGORIES}>
            {(cat) => <option value={cat}>{cat}</option>}
          </For>
        </select>
        <button>Refresh</button>
      </form>
      <div class={styles.gallery}>
        <For each={gallery()}>
            {(item: FakerData) => (
              <Suspense fallback={<p>loading...</p>}>
                <Show when={item}>
                  <section >
                    <figure>
                      <img src={item.url} />
                      <figcaption>{item.title}</figcaption>
                    </figure>
                  </section>
                </Show>
              </Suspense>
            )}
        </For>
      </div>
    </>
  );
}