const lastVisit = (req, res, next) => {
    const previousVisit = req.cookies.lastVisit || null;

    res.locals.lastVisit = previousVisit;

    const currentTime = new Date().toLocaleString();

    res.cookie("lastVisit", currentTime);

    next();
}

export default lastVisit;