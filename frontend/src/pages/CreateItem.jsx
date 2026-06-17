import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemApi } from '../services/api';

function CreateItem() {

    const navigate = useNavigate();

    const [item, setItem] = useState({

        title: '',
        category: '',
        rentalPrice: '',
        description: '',
        imageUrl: '',
        city: '',
        state: '',
        available: true

    });

    async function save() {

        try {

            const user =
                JSON.parse(
                    localStorage.getItem('user')
                );

            await itemApi.post(
                '/items',
                {
                    ...item,
                    ownerId: user?.id
                }
            );

            alert('Item cadastrado com sucesso!');

            navigate('/items');

        } catch (error) {

            console.error(error);

            alert('Erro ao cadastrar item');
        }
    }

    return (

        <div className="create-item-container">

            <h1>
                🎮 Novo Item Geek
            </h1>

            <input
                placeholder="Título"
                value={item.title}
                onChange={(e) =>
                    setItem({
                        ...item,
                        title: e.target.value
                    })
                }
            />

            <select
                 value={item.category}
                    onChange={(e)=>
                        setItem({
                            ...item,
                            category:e.target.value
                        })
                    }>

                    <option value="">
                        Selecione
                    </option>

                    <option value="Games">
                        🎮 Games
                    </option>

                    <option value="Mangás">
                        📚 Mangás
                    </option>

                    <option value="Action Figures">
                        🦸 Action Figures
                    </option>

                    <option value="Cosplay">
                        🎭 Cosplay
                    </option>

                    <option value="Colecionáveis">
                        🏆 Colecionáveis
                    </option>

                </select>

            <input
                type="number"
                placeholder="Preço por dia"
                value={item.rentalPrice}
                onChange={(e) =>
                    setItem({
                        ...item,
                        rentalPrice: e.target.value
                    })
                }
            />

            <input
                placeholder="URL da imagem"
                value={item.imageUrl}
                onChange={(e) =>
                    setItem({
                        ...item,
                        imageUrl: e.target.value
                    })
                }
            />

            <input
                placeholder="Cidade"
                value={item.city}
                onChange={(e) =>
                    setItem({
                        ...item,
                        city: e.target.value
                    })
                }
            />

            <input
                placeholder="Estado"
                value={item.state}
                onChange={(e) =>
                    setItem({
                        ...item,
                        state: e.target.value
                    })
                }
            />

            <textarea
                placeholder="Descrição"
                value={item.description}
                onChange={(e) =>
                    setItem({
                        ...item,
                        description: e.target.value
                    })
                }
            />

            <button onClick={save}>
                Salvar Item
            </button>

        </div>

    );
}

export default CreateItem;