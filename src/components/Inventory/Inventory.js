import React from 'react';
import UseTools from '../../Hooks/UseTools';
import InventoryDetails from './InventoryDetails';



const Inventory = () => {

    const [tools, setTools] = UseTools();

    return (
        <div>
            <br />
            <h1 className='text-center text-3xl font-serif underline text-stone-900'>My All Tools</h1>

            <br />
            <section className="text-gray-700 bg-white body-font">

                <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center overflow-hidden">



                    {
                        tools.map(tool => <InventoryDetails
                            key={tools._id}
                            tool={tool}
                        ></InventoryDetails>)
                    }


                </div>


            </section >





        </div >
    );
};

export default Inventory;