import { useEffect, useState } from 'react';

import { itemApi } from "../services/api";

import ItemCard from '../components/ItemCard';

import '../styles/items.css';

function Items() {

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState('');

  const [category, setCategory] = useState('');

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  const itemsPerPage = 8;

  useEffect(() => {

    loadItems();

  }, []);

  async function loadItems() {

    try {

      setLoading(true);

      const response = await itemApi.get('/items');

      setItems(response.data);

    }

    catch (error) {

      console.log(error);

      alert('Erro ao carregar itens.');

    }

    finally {

      setLoading(false);

    }

  }

  const filteredItems = items.filter(item => {

    const matchesSearch = item.title

      ?.toLowerCase()

      .includes(search.toLowerCase());

    const matchesCategory =

      category === '' ||

      item.category === category;

    return matchesSearch && matchesCategory;

  });

  const totalPages = Math.ceil(

    filteredItems.length / itemsPerPage

  );

  const startIndex =

    (page - 1) * itemsPerPage;

  const visibleItems =

    filteredItems.slice(

      startIndex,

      startIndex + itemsPerPage

    );

  return (

    <div className="items-container">

      <h1>

        🎌 Itens Geek

      </h1>

      <div className="filters">

        <input

          type="text"

          placeholder="Pesquisar item"

          value={search}

          onChange={(e) => {

            setSearch(e.target.value);

            setPage(1);

          }}

        />

        <select

          value={category}

          onChange={(e) => {

            setCategory(e.target.value);

            setPage(1);

          }}

        >

          <option value="">

            Todas as categorias

          </option>

          <option value="Mangá">

            Mangá

          </option>

          <option value="Figure">

            Figure

          </option>

          <option value="Cosplay">

            Cosplay

          </option>

          <option value="Console">

            Console

          </option>

        </select>

      </div>

      {loading ? (

        <p>Carregando...</p>

      ) : (

        <div className="items-grid">

          {visibleItems.map(item => (

            <ItemCard

              key={item.id}

              item={item}

            />

          ))}

        </div>

      )}

      <div className="pagination">

        <button

          disabled={page === 1}

          onClick={() =>

            setPage(page - 1)

          }

        >

          ◀ Anterior

        </button>

        <span>

          Página {page} de {totalPages || 1}

        </span>

        <button

          disabled={page === totalPages || totalPages === 0}

          onClick={() =>

            setPage(page + 1)

          }

        >

          Próxima ▶

        </button>

      </div>

    </div>

  );

}

export default Items;