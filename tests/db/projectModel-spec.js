/* eslint-disable no-unused-expressions */
// uses names 'gold', 'silver', 'copper';

const mocha = require('mocha');
const expect = require('chai').expect;
const Project = require('../../db/models/projectModel.js');
const User = require('../../db/models/userModel.js');

const describe = mocha.describe;
const it = mocha.it;
const before = mocha.before;
const beforeEach = mocha.beforeEach;
const after = mocha.after;

describe('Project Model', () => {
  const name = 'gold';
  const projectTree = 'hahaha123';
  const newProject = { name, project_tree: projectTree };
  const userId = 1;

  const newProject3 = {};
  Object.assign(newProject3, newProject);
  newProject3.name = 'silver';
  const newProject4 = {};
  Object.assign(newProject4, newProject);
  newProject4.name = 'copper';

  before((done) => {
    User.create({ id: 1 }, (err) => {
      if (err) { console.error(err); }
      User.create({ id: 2 }, (err2) => {
        if (err2) { console.error(err2); }
        done();
      });
    });
  });

  beforeEach((done) => {
    Project.remove({}, (err) => {
      if (err) { console.error(err); }
      done();
    });
  });

  after((done) => {
    Project.remove({}, (err) => {
      if (err) { console.error(err); }
      User.remove({ id: 1 }, (err2) => {
        if (err2) { console.error(err2); }
        User.remove({ id: 2 }, (err3) => {
          if (err3) { console.error(err3); }
          done();
        });
      });
    });
  });

  describe('Project creation: ', () => {
    it('Does not add invalid projects to database', (done) => {
      Project.create(userId, { name: '123' }, (err) => {
        expect(err).to.exist;
        done();
      });
    });

    it('Adds valid projects to database', (done) => {
      Project.create(userId, newProject, (err) => {
        expect(err).to.not.exist;
        Project.get({}, (err2, projects) => {
          expect(err2).to.not.exist;
          expect(projects.length).to.not.equal(0);
          expect(projects[0].name).to.equal('gold');
          done();
        });
      });
    });
  });

  describe('Project Update: ', () => {
    it('Does not add or remove projects from database', (done) => {
      Project.create(userId, newProject, (err, { insertId }) => {
        expect(err).to.not.exist;
        const newProject2 = {};
        Object.assign(newProject2, newProject);
        newProject2.project_tree = 'captainfalcon';
        newProject2.id = insertId;
        Project.update(newProject2, (err2) => {
          expect(err2).to.not.exist;
          Project.get({}, (err3, projects) => {
            expect(err3).to.not.exist;
            expect(projects.length).to.not.equal(0);
            done();
          });
        });
      });
    });

    it('Updates existing projects in database', (done) => {
      Project.create(userId, newProject, (err, { insertId }) => {
        expect(err).to.not.exist;
        const newProject2 = Object.assign(newProject);
        newProject2.project_tree = 'notRandom';
        newProject2.id = insertId;
        Project.update(newProject2, (err2) => {
          expect(err2).to.not.exist;
          Project.get({}, (err3, projects) => {
            expect(err3).to.not.exist;
            expect(projects[0].project_tree).to.equal('notRandom');
            done();
          });
        });
      });
    });
  });

  describe('Project get: ', () => {
    it('Gets all projects if passed empty object', (done) => {
      Project.create(userId, newProject, (err) => {
        expect(err).to.not.exist;
        Project.create(userId, newProject3, (err2) => {
          expect(err2).to.not.exist;
          Project.create(userId, newProject4, (err3) => {
            expect(err3).to.not.exist;
            Project.get({}, (err4, projects) => {
              expect(err4).to.not.exist;
              expect(projects.length).to.be.above(2);
              done();
            });
          });
        });
      });
    });

    it('Uses object as search query when passed object with properties', (done) => {
      Project.create(userId, newProject, (err) => {
        expect(err).to.not.exist;
        Project.create(userId, newProject3, (err2) => {
          expect(err2).to.not.exist;
          Project.create(userId, newProject4, (err3) => {
            expect(err3).to.not.exist;
            Project.get({ name: 'silver' }, (err4, projects) => {
              expect(err4).to.not.exist;
              expect(projects.length).to.equal(1);
              expect(projects[0].name).to.equal('silver');
              done();
            });
          });
        });
      });
    });
  });

  describe('Project remove: ', () => {
    it('Removes project based on search query when passed object with properties', (done) => {
      Project.create(userId, newProject, (err, { insertId }) => {
        expect(err).to.not.exist;
        Project.create(userId, newProject3, (err2) => {
          expect(err2).to.not.exist;
          Project.remove({ id: insertId }, (err3) => {
            expect(err3).to.not.exist;
            Project.get({}, (err4, projects) => {
              expect(err4).to.not.exist;
              expect(projects.length).to.equal(1);
              expect(projects[0].name).to.equal('silver');
              done();
            });
          });
        });
      });
    });
  });

  describe('Getting user projects: ', () => {
    it('Gets all project of a user', (done) => {
      Project.create(userId, newProject, (err) => {
        expect(err).to.not.exist;
        Project.create(userId, newProject3, (err2) => {
          expect(err2).to.not.exist;
          Project.create(2, newProject4, (err3) => {
            expect(err3).to.not.exist;
            Project.getUserProjects(userId, (err4, projects) => {
              expect(err4).to.not.exist;
              expect(projects.length).to.equal(2);
              expect(projects[0].name).to.equal('gold');
              expect(projects[1].name).to.equal('silver');
              done();
            });
          });
        });
      });
    });
  });
});