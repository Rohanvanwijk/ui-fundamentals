<template>
    <h1>Design challenge 4</h1>
    <h2>Visual hierachy</h2>
    <p>Fix the design below</p>
    <div class="sandbox">
        <div class="card">
            
            <svg viewBox="0 0 96 96">
                <g id="down-arrow" transform="translate(-418 -150)">
                    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(418 150)" fill="none" stroke="#ffffff" stroke-width="7">
                    <circle cx="48" cy="48" r="48" stroke="none"/>
                    <circle cx="48" cy="48" r="44.5" fill="none"/>
                    </g>
                    <g id="Group_1" data-name="Group 1">
                    <path id="Path_2" data-name="Path 2" d="M554,8207.49v29.931" transform="translate(-88 -8033.361)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="5"/>
                    <path id="Path_3" data-name="Path 3" d="M541.8,8246.06l13.07,13.069,13.07-13.069" transform="translate(-89 -8042)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="5"/>
                    </g>
                </g>
            </svg>
            
            <h1>Pay your debts</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
            <a href="#">Find out how</a>
        </div>
        <p class="obligation">There's no obligation!</p>
    </div>
    <h2 class="divider">Sollution</h2>
    <div class="sol sandbox">
        <div class="sol__card card">
            
            <svg viewBox="0 0 96 96" class="sol__svg">
                <g id="down-arrow" transform="translate(-418 -150)">
                    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(418 150)" fill="none" stroke="#ffffff" stroke-width="7">
                    <circle cx="48" cy="48" r="48" stroke="none"/>
                    <circle cx="48" cy="48" r="44.5" fill="none"/>
                    </g>
                    <g id="Group_1" data-name="Group 1">
                    <path id="Path_2" data-name="Path 2" d="M554,8207.49v29.931" transform="translate(-88 -8033.361)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="5"/>
                    <path id="Path_3" data-name="Path 3" d="M541.8,8246.06l13.07,13.069,13.07-13.069" transform="translate(-89 -8042)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="5"/>
                    </g>
                </g>
            </svg>
            
            <h1 class="sol__title">Pay your debts</h1>
            <p class="sol__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
            <a href="https://nos.nl" rel="noreferer" target="_blank" class="sol__button">
                Find out how
                <svg class="sol__icon icon" width="18px" height="18px" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                    <path d="M5.49 15.61a1.5 1.5 0 0 1-.1-2.12L9.47 9 5.39 4.51a1.5 1.5 0 1 1 2.22-2.02L12.62 8A1.474 1.474 0 0 1 13 9a1.524 1.524 0 0 1-.38 1l-5.01 5.51a1.5 1.5 0 0 1-2.12.1z"/>
                </svg>

            </a>
        </div>
        <p class="obligation sol__obligation">There's no obligation!</p>
    </div>
</template>

<script>
export default {
    name: 'ChallengeFour',
};
</script>

<style lang="scss" scoped>
    $color-primary: #309D67;
    $color-secondary: #30399d;
    $color-support: rgba(0, 0, 0, 0.561);

.sandbox {
    margin-bottom: 3rem;
    .card {
    background: $color-primary;
    border-radius: 1em;
    padding: 2.3em;
    text-align: center;
}

svg:not(.icon) {
    width: 5em;
}

h1 {
    font-size: 1em;
    font-weight: normal;
}

.card p {
    font-size: .85em;
    color: #474747;
}

a {

    display: inline-block;
    color: black;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5em;
    font-size: .8em;
}
.obligation {
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
}
}
.sol {
    &__card {
        color: white;
    }
    &__svg {
        width: 2em !important;
    }
    &__title {
        font-weight: bold !important;
        font-size: 1.5em !important;
        text-transform: uppercase;
    }
    &__text {
        font-size: inherit !important;
        color: white !important;
        line-height: 1.4;
        margin-bottom: 2em;
    }
    &__button {
        background-color: $color-secondary;
        border: 2px solid $color-secondary;
        transition: all 200ms ease-in-out;
        color: white !important;
        font-size: inherit !important;
        padding: 0.6em 2em;
        display: inline-flex !important;
        justify-content: center;
        align-items: center;
        gap: 0.7em;
        &:hover,
        &:focus {
            background-color: transparent;
        }
    }
    &__icon {
        fill: white;
    }
    &__obligation {
        color: $color-support;
        font-size: 0.7em;
        text-transform: uppercase;
    }
}
</style>