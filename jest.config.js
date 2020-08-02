module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // https://github.com/facebook/jest/issues/1395#issuecomment-419490847
  // https://docs.docker.com/docker-for-mac/osxfs-caching/
  // https://medium.com/@kevinsimper/how-to-disable-jsdom-in-jest-make-jest-run-twice-as-fast-a01193f23405
  roots: ["./test"]
};