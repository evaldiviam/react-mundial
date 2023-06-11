import React from 'react'
import FormGame from '../components/games/FormGame'
import Header from '../components/common/Header'


const ManageGamesPage = () => {
    return (
        <>
            <Header item="manage-game" />
            <main>
                <FormGame />
            </main>
        </>

    );
}

export default ManageGamesPage