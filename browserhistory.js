class BrowserHistory {
  #visited = []
  #current = null

  constructor(url) {
    if(url){
      this.#visited.push(url)
      this.#current = this.#visited.length - 1
    }
  
  }

  visit(url) {
    if(this.#current !== this.#visited.length - 1){
      this.#visited.splice(this.#current+1)
    }
    this.#visited.push(url)
    this.#current = this.#visited.length - 1
  }
  
  get current() {
    return this.#visited[this.#current]
  }
  
  goBack() {
    if(this.#current > 0){
      this.#current = this.#current - 1
    }
  }
  
  // go to next visited url
  forward() {
    if(this.#current < this.#visited.length - 1){
      this.#current = this.#current + 1
    }
  }
}