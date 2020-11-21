// шаблон наблюдателя
// список наблюдаемых событий
class EventObserver {
  constructor() {
    this.observers = [];
  }

  // добавление обратного вызова
  subscribe(fn) {
    this.observers.push(fn)
  }

  // удаление обратного вызова
  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  // для вызова всех событий
  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

const observer = new EventObserver();
const fn = () => {
  console.log('dd')
}

observer.subscribe(fn);
//observer.unsubscribe(fn);//

let subscriberHasBeenCalled = false;
const tt = data => subscriberHasBeenCalled = data
observer.subscribe(tt)

observer.broadcast(true)

// подсчет СЛОВ при вводе
const getWordCount = text => text ? text.trim().split(/\s+/).length : 0;

const blogPost1 = 'This is a blog \n\n post with a word count'

const count = getWordCount(blogPost1)
// console.log(count)

const wordCountElement = document.createElement('p')

wordCountElement.className = 'wordCount'
wordCountElement.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>';

document.body.appendChild(wordCountElement)

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
  const blogCount = document.getElementById('blogWordCount');
    blogCount.textContent = getWordCount(text);
});

const blogPost = document.getElementById('blogPost')

blogPost.addEventListener('keyup', () =>  blogObserver.broadcast(blogPost.value))