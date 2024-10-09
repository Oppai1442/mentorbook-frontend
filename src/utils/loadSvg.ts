type LoadSvgResult = {
    [key: string]: { status: number; data: string | null };
};

const loadSvg = async (svgPaths: { [key: string]: () => Promise<any> }) => {
    const promises = Object.keys(svgPaths).map(async (key) => {
        try {
            const { default: svg } = await svgPaths[key]();
            return { key, svg };
        } catch (err) {
            console.error(`Error loading SVG for ${key}:`, err);
            return { key, svg: null };
        }
    });

    const results = await Promise.all(promises);

    return results.reduce((acc, { key, svg }) => {
        acc[key] = svg;
        return acc;
    }, {} as { [key: string]: string | null });
};

export default loadSvg;


