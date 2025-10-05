// Blog Images
import roadmap2026 from '../assets/blog/2026-roadmap.png';

// Home Page Images
import luma512 from '../assets/Luma-IconLogo-2025-512.png';
import luma256 from '../assets/Luma-IconLogo-2025-256.png';
import placeholder from '../assets/Placeholder.png';
import placeholder2 from '../assets/Placeholder2.png';
import placeholder3 from '../assets/Placeholder3.png';

// Logos (from public folder)
import lumaSvg from '/Luma.svg';

export const blogImages = {
    roadmap2026,
};

export const homeImages = {
    luma512,
    luma256,
    placeholder,
    placeholder2,
    placeholder3,
};

export const logos = {
    lumaSvg,
};

export const allImages = {
    blog: blogImages,
    home: homeImages,
    logos,
};

export const getImage = (imagePath, fallback = placeholder) => {
    return imagePath || fallback;
};

export const getImageByPath = (path) => {
    const keys = path.split('.');
    let result = allImages;

    for (const key of keys) {
        if (result[key] === undefined) {
            console.warn(`Image not found: ${path}`);
            return placeholder;
        }
        result = result[key];
    }

    return result;
};