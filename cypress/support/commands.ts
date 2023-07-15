import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

// чтобы не смамить запросами во время ci - фикстуры (разработчиков может быть много)
// перед релизом в релизной ветке в ci передавать FIXTURE_MODE как api и тесты будут
// выполняться на реальных данных, реальный api
// Cypress.Commands.overwrite('intercept', () => {
//     // либо записываем, либо читаем фикстуры
//     const { FIXTURE_MODE } = process.env;
//     const fixtureName = req.METHOD + req.url + hash(req.body);
//
//     if (FIXTURE_MODE === 'READ') {
//          readFixture()
//     }
//
//     if (FIXTURE_MODE === 'WRITE') {
//         // createFixture(fixtureName, req.body)
//     }
// });

export {};
