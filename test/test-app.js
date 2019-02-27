/* global describe, beforeEach, it */

const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator spring-cloud-stream', () => {
    describe('Test with Maven and Angular2', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angular2'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    messageBrokerType: 'RabbitMQ',
                    rabbitMqNameOfMessage: 'rabbit',
                })
                .on('end', done);
        });

        it('generate docker-compose file', () => {
            assert.file([
                'src/main/docker/rabbitmq.yml'
            ]);
        });
        it('generate Java classes', () => {
            assert.file([
                'src/main/java/com/mycompany/myapp/domain/JhiRabbit.java',
                'src/main/java/com/mycompany/myapp/service/stream/RabbitSink.java',
                'src/main/java/com/mycompany/myapp/web/rest/RabbitResource.java'
            ]);
        });
    });

    describe('Test with Gradle and Angular1', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/gradle-angular1'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    messageBrokerType: 'RabbitMQ',
                    rabbitMqNameOfMessage: 'rabbit',
                })
                .on('end', done);
        });

        it('generate docker-compose file', () => {
            assert.file([
                'src/main/docker/rabbitmq.yml'
            ]);
        });
        it('generate Java classes', () => {
            assert.file([
                'src/main/java/com/mycompany/myapp/domain/JhiRabbit.java',
                'src/main/java/com/mycompany/myapp/service/stream/RabbitSink.java',
                'src/main/java/com/mycompany/myapp/web/rest/RabbitResource.java'
            ]);
        });
    });

    describe('Test with Kafka', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/kafka'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    messageBrokerType: 'RabbitMQ',
                    rabbitMqNameOfMessage: 'rabbit',
                })
                .on('error', () => {
                    done();
                })
                .on('end', done);
        });
        it('doesn\'t generate docker-compose file', () => {
            assert.noFile([
                'src/main/docker/rabbitmq.yml'
            ]);
        });
        it('doesn\'t generate Java classes', () => {
            assert.noFile([
                'src/main/java/com/mycompany/myapp/domain/JhiRabbit.java',
                'src/main/java/com/mycompany/myapp/service/stream/RabbitSink.java',
                'src/main/java/com/mycompany/myapp/web/rest/RabbitResource.java'
            ]);
        });
    });

    describe('Test with blueprint', () => {
        beforeEach((done) => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir((dir) => {
                    fse.copySync(path.join(__dirname, '../test/templates/ngx-blueprint'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    messageBrokerType: 'RabbitMQ',
                    rabbitMqNameOfMessage: 'rabbit',
                })
                .on('end', done);
        });

        it('generate docker-compose file', () => {
            assert.file([
                'src/main/docker/rabbitmq.yml'
            ]);
        });
        it('generate Java classes', () => {
            assert.file([
                'src/main/java/com/mycompany/myapp/domain/JhiRabbit.java',
                'src/main/java/com/mycompany/myapp/service/stream/RabbitSink.java',
                'src/main/java/com/mycompany/myapp/web/rest/RabbitResource.java'
            ]);
        });
    });
});
