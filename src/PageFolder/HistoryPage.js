import axios from "axios";
import './HistoryPage.css';
function HistoryPage() {
    axios({
        method: 'get',
        url: `https://localhost:7073/api/controller/getHistory?idUser=${sessionStorage.getItem('idUser')}`,

        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
        let div = document.getElementById('divHis');
        for (const iterator of res['data']) {
            var divcard = document.createElement('div');
            divcard.className = "cardHistory";
            let text = document.createElement('h1');
            text.textContent = iterator['idUser'];
            let query = document.createElement('h1');
            query.textContent = iterator['query'];
            let respons = document.createElement('h1');
            respons.textContent = iterator['response'];


            divcard.append(text);
            divcard.append(query);
            divcard.append(respons);
            div.append(divcard);
        }
    });
    return(
        <div id="divHis">
           
        </div>

    );
}
export default HistoryPage;