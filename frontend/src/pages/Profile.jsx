// src/pages/Profile.jsx
import { useEffect, useState } from 'react';
import { getProfile } from '../services/profileApi';

function Profile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      setLoading(true);

      const response = await getProfile();
      setData(response.data);

    } catch (err) {
      console.log(err);
      setError('Erro ao carregar perfil');

    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!data) {
    return <h2>Nenhum dado encontrado</h2>;
  }

  return (
    <div className="profile-page">

      <div className="profile-header">
        <img
          src={data.profile?.avatar_url || 'https://placehold.co/200'}
          alt=""
        />

        <div>
          <h1>{data.profile?.name}</h1>

          <p>
            📍 {data.profile?.city} - {data.profile?.state}
          </p>

          <p>⭐ {data.profile?.rating}</p>

          <p>{data.profile?.bio}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div>
          <h3>Itens</h3>
          <p>{data.stats?.totalItems || 0}</p>
        </div>

        <div>
          <h3>Locações</h3>
          <p>{data.stats?.totalRentals || 0}</p>
        </div>
      </div>

      <h2>Meus Itens</h2>

      <div className="items-grid">
        {(data.items || []).map(item => (
          <div key={item.id} className="item-box">
            <h4>{item.title}</h4>
            <p>{item.category}</p>
            <p>R$ {item.rental_price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Profile;