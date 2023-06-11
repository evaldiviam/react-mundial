import React from 'react'
import FormTeam from '../components/team/FormTeam'
import Header from '../components/common/Header';

const ManageTeamPage = () => {
    return (
        <>
            <Header item="manage-team"/>
            <main>
                <FormTeam />
            </main>
        </>

    )
}

export default ManageTeamPage