// src/utils/loadSvgs.ts
const loadSvgs = () => {
    const svgNames = ['google-logo', 'apple-logo']; // Danh sách tên SVG
    const svgs: { [key: string]: string } = {};

    svgNames.forEach(name => {
        try {
            const svgPath = require(`../assets/svg/${name}.svg`).default; // Import trực tiếp
            console.log(`Loaded SVG: ${name} => ${svgPath}`); // Debug log
            svgs[name] = svgPath;
        } catch (error) {
            console.error(`Error loading SVG: ${name}`, error);
            svgs[name] = "null"; // Hoặc có thể gán một giá trị mặc định
        }
    });

    return svgs;
};

export default loadSvgs;