export default function* rootSaga() {
    try {
        yield console.log('rootSaga');
    } catch (err) {
        console.log('err: ', err);
    }
}
