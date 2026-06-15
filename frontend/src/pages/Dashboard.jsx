import { useEffect, useState } from 'react';

import {
  itemApi,
  rentalApi,
} from "../services/api";

import DashboardChart from '../components/DashboardChart';

import usePermissions from '../hooks/usePermissions';

import AdminLayout from '../layouts/AdminLayout';

import ClientLayout from '../layouts/ClientLayout';

import '../styles/dashboard.css';

function Dashboard() {

  const { isAdmin } = usePermissions();

  const [totalItems, setTotalItems] = useState(0);

  const [totalRentals, setTotalRentals] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    try {

      const [itemsResponse, rentalsResponse] = await Promise.all([

        itemApi.get('/items'),

        rentalApi.get('/rentals')

      ]);

      setTotalItems(itemsResponse.data.length);

      setTotalRentals(rentalsResponse.data.length);

    }

    catch (error) {

      console.log(error);

    }

    finally {

      setLoading(false);

    }

  }

  if (loading) {

    return <h2>Carregando Dashboard...</h2>;

  }

  const dashboardContent = (

    <>

      <h1>

        Dashboard

      </h1>

      <div className='dashboard-grid'>

        <div className='dashboard-card'>

          <span>📦</span>

          <h2>

            {totalItems}

          </h2>

          <p>

            Itens

          </p>

        </div>

        <div className='dashboard-card'>

          <span>📅</span>

          <h2>

            {totalRentals}

          </h2>

          <p>

            Locações

          </p>

        </div>

      </div>

      <DashboardChart

        items={totalItems}

        rentals={totalRentals}

      />

    </>

  );

  if (isAdmin) {

    return (

      <AdminLayout>

        {dashboardContent}

      </AdminLayout>

    );

  }

  return (

    <ClientLayout>

      {dashboardContent}

    </ClientLayout>

  );

}

export default Dashboard;