export default () => {
    const onLoadHandler = () => {
        document.body.classList.add(`loaded`);
    };

    document.body.addEventListener(`load`, onLoadHandler);
};
