import axios from "axios";


export class BaseService {

    async getAll(endpoint: string): Promise<any[]> {

        let data: any[] = [];
        await axios.get('https://northwind.vercel.app/api/' + endpoint)
            .then(res => {
                data = res.data;
            })

        return data;
    }

}




