import Table from "react-bootstrap/Table";
import styles from './Table.module.css'
import { Roboto_Mono } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono', // Define another CSS variable
});


export default function Home() {
  return (
    <div className={styles['table-container']} >
      <h1 >Standings</h1>
      <p>Here are the current standings for the league:</p>
      <Table className={styles['standings-table']}  bordered={false} hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Team</th>
            <th>Points</th>
            <th>Weeks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Freddorators</td>
            <td>33</td>
            <td>4/4</td>
          </tr>
          <tr>
            <td></td>
            <td>Grovesters</td>
            <td>29</td>
            <td>4/4</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
