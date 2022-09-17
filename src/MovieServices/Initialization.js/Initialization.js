import datapage1 from "../../Data/CONTENTLISTINGPAGE-PAGE1.json"
import datapage2 from "../../Data/CONTENTLISTINGPAGE-PAGE2.json"
import datapage3 from "../../Data/CONTENTLISTINGPAGE-PAGE3.json"
let dataFullData = [];
const dataLoadInitial = () => {
    const data1page = datapage1.page["content-items"].content;
    const data2page = datapage2.page["content-items"].content;
    const data3page = datapage3.page["content-items"].content;
    dataFullData = [...data1page, ...data2page, ...data3page]
}


const Initialization = {
    async getMethod(value) {
        await dataLoadInitial();
        let dataFil = dataFullData.filter((item) => {
            return item.name.toLowerCase().includes(value.toLowerCase())
        })
        return dataFil;

    },
    async setInitialData() {
        await dataLoadInitial();

        return dataFullData;

    }
};
export default Initialization;