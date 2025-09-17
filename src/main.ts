const titleViews = document.querySelector('.main-title-views') as HTMLSpanElement;
const titleViewsSuffix = document.querySelector('.main-title-suffix') as HTMLSpanElement;
const priceMonth = document.querySelector('.main-price') as HTMLSpanElement;
const slider = document.querySelector('.main-slider') as HTMLInputElement;

interface Pricing {
    titleViews: number;
    titleViewsSuffix: 'k' | 'm';
    priceMonth: number;
};

const pricingPlans: Pricing[] = [
    { titleViews: 10, titleViewsSuffix: 'k', priceMonth: 8},
    { titleViews: 50, titleViewsSuffix: 'k', priceMonth: 12},
    { titleViews: 100, titleViewsSuffix: 'k', priceMonth: 16},
    { titleViews: 500, titleViewsSuffix: 'k', priceMonth: 24},
    { titleViews: 1, titleViewsSuffix: 'm', priceMonth: 36},
];

slider?.addEventListener('input', event => {
    const sliderElement = event.target as HTMLInputElement;
    let sliderLevel :number = Number(sliderElement.value);
    const plan = pricingPlans[sliderLevel];
    titleViews.innerText = plan.titleViews + plan.titleViewsSuffix
    priceMonth.innerText = String(plan.priceMonth.toFixed(2));

});


