const svgCache: { [key: string]: string | null } = {};

const loadSvgs = (svgName: string) => {
    let svgPath: string | null = null;
    let status: number;

    try {
        if (svgCache[svgName]) {
            svgPath = svgCache[svgName]
        } else {
            svgPath = require(`../assets/svg/${svgName}.svg`);
            svgCache[svgName] = svgPath
        }
        status = 200;
    } catch (error) {
        console.error('Error loading SVG:', error);
        status = 404;
    }

    return {
        data: svgPath,
        status: status,
    };
};

export default loadSvgs;