export class Pager {
  constructor(data = [], count = 10) {
    this.totalData = data
    this.total = data.length
    this.totalPage = Math.ceil(this.total / count)
    this.count = count
    this.currentPage = 1
  }

  get currentPageData() {
    const startIndex = (this.currentPage - 1) * this.count
    const endIndex = startIndex + this.count
    return this.totalData.slice(startIndex, endIndex)
  }
}
