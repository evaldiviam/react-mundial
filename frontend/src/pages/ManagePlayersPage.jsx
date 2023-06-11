import React from 'react'
import Header from '../components/common/Header';
import FormPlayer from '../components/players/FormPlayer';
const ManagePlayersPage = () => {
    return (
        <>
            <Header item="manage-player" />
            <main>
                <FormPlayer />
            </main>
        </>
    )
}

export default ManagePlayersPage