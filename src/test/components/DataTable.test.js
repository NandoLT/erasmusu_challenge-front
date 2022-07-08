import React from 'react';
import { cleanup, render, screen } from "@testing-library/react";
import { DataTable } from '../../components/DataTable';


afterEach(cleanup);

const advertsEmpty = []
const advertsNoEmpty = [
    {
        Photo:'https://www.blackwallst.directory/images/NoImageAvailable.png',
        City:'Madrid',
        Address:'Alcalá, 242',
        Link:'https://google.es'
    },
    {
        Photo:'https://www.blackwallst.directory/images/NoImageAvailable.png',
        City:'Barcelona',
        Address:'Ronda, 33',
        Link:'https://google.es'
    },
    {
        Photo:'https://www.blackwallst.directory/images/NoImageAvailable.png',
        City:'Granada',
        Address:'Avd. Colón, 1',
        Link:'https://google.es'
    }
]

describe('Testing DataTable Component', () => {
    test("<DataTable /> must show message 'No results in DB' if adverts is empty", () => {
        render(<DataTable tableInfo={advertsEmpty} />);

        expect(screen.getByText('No results in DB')).toBeInTheDocument();
    });

    test("<DataTable /> must show a table if adverts is not empty", () => {
        render(<DataTable tableInfo={advertsNoEmpty} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
    });
})