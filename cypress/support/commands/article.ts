import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'testing',
    subtitle: 'testing',
    img: 'https://zsfond.ru/wp-content/uploads/2021/03/piton-1-1024x578.jpg',
    views: 1,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'Authorization' },
    body: article ?? defaultArticle,
}).then((resp) => resp.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'Authorization' },
});

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            removeArticle(articleId: string): Chainable<void>
        }
    }
}
