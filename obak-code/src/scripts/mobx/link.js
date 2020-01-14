import { observable, action, computed } from "mobx";
import { axios } from "&";
function DateFormat(str) {
    let date = new Date(str)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month
    let day = date.getDate()
    day = day < 10 ? "0" + day : day
    let today = `${year}-${month}-${day}`;
    return today
}
class LinkMan {
    @observable articleList = {}
    @observable mineArt = []
    @observable artList = []

    @action getArtList = async ({ url }) => {
        let res = await axios.post(url)
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.artList = res.data.result
    }

    @action getMineArt = async ({ url, data }) => {
        let res = await axios.post(url, data)
        res.data.result.map((item, i) => {
            item.time = DateFormat(item.time)
            return item
        })
        this.mineArt = res.data.result
    }

    @action changeAdmin = (admin) => {
        this.articleList["admin"] = admin
    }
    @action changeAvatar = (avatar) => {
        this.articleList["avatar"] = avatar
    }

    @action changeTitle = (title) => {
        this.articleList["title"] = title
    }

    @action changeContent = (content) => {
        this.articleList["content"] = content
    }

    @action submitArticle = async ({ url, data }) => {
        let res = await axios.post(url, data)

    }

    @action resetArticleList = () => {
        this.articleList = {}
    }
}


export default new LinkMan()

