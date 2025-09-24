const titleViews = document.querySelectorAll<HTMLSpanElement>('.main-title-views');
const priceMonth = document.querySelector('.main-price') as HTMLSpanElement;
const slider = document.querySelector('.main-slider') as HTMLInputElement;
const switchBilling = document.querySelector('.main-switch-input') as HTMLInputElement;

interface Pricing {
    titleViews: number;
    titleViewsSuffix: 'k' | 'm';
    priceMonth: number;
}

const pricingPlans: Pricing[] = [
    { titleViews: 10, titleViewsSuffix: 'k', priceMonth: 8},
    { titleViews: 50, titleViewsSuffix: 'k', priceMonth: 12},
    { titleViews: 100, titleViewsSuffix: 'k', priceMonth: 16},
    { titleViews: 500, titleViewsSuffix: 'k', priceMonth: 24},
    { titleViews: 1, titleViewsSuffix: 'm', priceMonth: 36},
];

function updatePricing(): void {
    const sliderLevel = Number(slider.value);
    const plan = pricingPlans[sliderLevel];

    titleViews.forEach(title => {
        title.innerText = plan.titleViews + plan.titleViewsSuffix;
    })

    if (switchBilling.checked) {
        priceMonth.innerText = (plan.priceMonth * 0.75).toFixed(2);
    } else {
        priceMonth.innerText = plan.priceMonth.toFixed(2);
    }
}

function updateSlider(): void {
    const value = Number(slider.value);
    const min = Number(slider.min);
    const max = Number(slider.max);
    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) ${percent}%,
        hsl(224, 65%, 95%) ${percent}%)`;
}

slider?.addEventListener('input', updatePricing);
switchBilling?.addEventListener('change', updatePricing);
slider?.addEventListener('input', updateSlider);

updatePricing();
updateSlider();


