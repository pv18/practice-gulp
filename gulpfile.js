// require - конструкция node js, которая позволяет подключать пакеты
const gulp = require('gulp');

// Старый синтаксиc написания gulp
// Под GULP мы подразумиваем GULP-объект, с его методами
// Которые мы можем вызывать и выполнять какие либо действия

// метод task создает задачу. Принимает 2 аргумента
// 1 - имя задачи 2 - функция, которая выполняет действие
// В GULP все задачи должны быть завершены!!!
// Либо фун-я что-то возвращает либо мы должны обозначить действием callback()

gulp.task('first', function (callback) {
    console.log('Hello from First!');
    callback();
})

gulp.task('second', function (callback) {
    console.log('Hello from Second!');
    callback();
})

gulp.task('third', function (callback) {
    console.log('Hello from Third!');
    callback();
})

// series() - метод GULP последовательных выполнений задач
// gulp.task('default', gulp.series('first', 'second', 'third'))

// parallel() - метод GULP парралельных выполнений задач
gulp.task('default', gulp.parallel('first', 'second', 'third'))