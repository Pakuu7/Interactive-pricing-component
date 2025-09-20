const titleViews = document.querySelector('.main-title-views') as HTMLSpanElement;
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

    titleViews.innerText = plan.titleViews + plan.titleViewsSuffix;

    if (switchBilling.checked) {
        priceMonth.innerText = (plan.priceMonth * 0.75).toFixed(2);
    } else {
        priceMonth.innerText = plan.priceMonth.toFixed(2);
    }
}

slider?.addEventListener('input', updatePricing);
switchBilling?.addEventListener('change', updatePricing);

updatePricing();


