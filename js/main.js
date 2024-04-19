const onLoad = document.querySelector(".on-load-home");
const menuButton = document.querySelector(".buttons-menu");
const counterItemNumber1 = document.querySelector("#counter-item-number");
const counterItemNumber2 = document.querySelector("#counter-item-number1");
const signInSection = document.querySelector(".sign-in");
const signUpSection = document.querySelector(".sign-up");
const homeSection = document.querySelector(".home");
const userAccount = document.querySelector(".user-account");
const setupAccount = document.querySelector(".set-up-account");
const passwordPopUp = document.querySelector(".password-pop-up-container");
const historialOrder = document.querySelector(".historial-order");
const shoppingDetailPopUp = document.querySelector(".shopping-detail-pop-up-container");
const shoppingCart = document.querySelector(".shopping-cart");
const aboutUs = document.querySelector(".about-us");
const ProductDescription = document.querySelector(".product-description");
const categories = document.querySelector(".categories");
const rewardZone = document.querySelector(".reward-zone");
const contact = document.querySelector(".contact");
const loyaltyProgram = document.querySelector(".loyalty-program");
const spinDaily = document.querySelector(".spin-daily");
const menuDisplayPanelControls = document.querySelectorAll(".menu-display-user-account");
const editDirectionContainer1 = document.querySelector(".edit-direction-container1");
const svg1MenuPanelControl = document.querySelector(".svg1-menu-panel-control");
const pathElements = svg1MenuPanelControl.querySelectorAll("path");
const menuPanelControlTitle = document.querySelector(".menu-panel-control h3");
const button1SelectedMenuDisplayUser = document.querySelector("#button1-selected-menu-display-user");
const button2SelectedMenuDisplayUser = document.querySelector("#button2-selected-menu-display-user");
const button3SelectedMenuDisplayUser = document.querySelector("#button3-selected-menu-display-user");
const button4SelectedMenuDisplayUser = document.querySelector("#button4-selected-menu-display-user");
const contentPanelControl = document.querySelector(".content-panel-control");
const contentUserAccountContainer = document.querySelector(".content-user-account-container");
const menuNavMquery = document.querySelector(".menu-nav-mquery");
const myProfileOptionsMenuNavMquery = document.querySelector(".my-profile-options-menu-nav-mquery");
const topDealProductMenuNavMquery = document.querySelector(".top-deal-product-menu-nav-mquery");
const spanMenuPanelControlContainer = document.querySelector(".span-menu-panel-control-container");
const specialCategoryList = document.querySelector("#special-category-list");
const specialCategoryArrow = document.querySelector("#img-arrow-categories1");
const subcategoryList = document.querySelector("#subcategory-list");
const subcategoryListArrow = document.querySelector("#img-arrow-categories2");
const priceCategoriesList  = document.querySelector("#price-categories-list");
const priceCategoriesListArrow  = document.querySelector("#img-arrow-categories3");
const filterCategoriesMquery = document.querySelector("#filter-categories-mquery");
const buttonsLoginRegisterMenuNavMquery = document.querySelector(".buttons-login-register-menu-nav-mquery");
const buttonLogoutMenuNavMquery = document.querySelector(".button-logout-menu-nav-mquery");
const closeBagMenuNavButton2Mquery = document.querySelector(".close-bag-menu-nav-button2-mquery");
const stockFlavorContainers = document.querySelectorAll('.stock-flavor-container');
const buttonBagProductContainer2 = document.querySelectorAll(".button-bag-product-container2");
const content2Container2 = document.querySelectorAll(".content2-container2");

function toPage() {
    window.scrollTo(0, 0);
};

window.onload = function() {
    onLoad.style.display = "flex";
    document.body.style.overflow = "hidden";
};

function closeOnLoad() {
    onLoad.style.display = "none";

    document.body.style.overflow = "auto";
}

function menuNavHeader() {
    if (menuButton.style.display === "block") {
        menuButton.style.display = "none";

        document.body.style.overflow = "auto";
    } else {
        menuButton.style.display = "block";

        document.body.style.overflow = "hidden";
    }
}

function sectionSingIn() {
    signInSection.style.display = "flex";

    homeSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";
    signUpSection.style.display = "none";

    closeMenuNavBarMquery();
    closeMenuNav();
    toPage();
}

function signUp() {
    signUpSection.style.display = "flex";
    
    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNavBarMquery();
    toPage();
}

function sectionSingInFromSignUp() {
    signInSection.style.display = "flex";

    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    toPage();
}

function sectionUserAccount() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        userAccount.style.display = "block";
    } else {
        userAccount.style.display = "flex";
        spanMenuPanelControlContainer.style.display = "flex";

        closeMenuNavBarMquery();
    }

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNav();
    toPage();
}

function closeMenuNav() {
    if(menuButton.style.display = "block") {
        menuButton.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

function sectionUserAccountFromMenu() {
    userAccount.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none"
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    menuNavHeader();
    toPage();
}

function sectionSetupAccount() {
    setupAccount.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    historialOrder.style.display = "none"
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNav();
    closeMenuPanelControl();
    toPage();
}

function sectionPasswordPopUp() {
    passwordPopUp.style.display = "flex";

    document.body.style.overflow = "hidden";
}
function sectionPasswordChangedPopUp() {
    passwordPopUp.style.display = "none";

    document.body.style.overflow = "auto";
}

function sectionHistorialOrder() {
    historialOrder.style.display = "block";

    button3SelectedMenuDisplayUser.style.color = "#057A10";
    button2SelectedMenuDisplayUser.style.color = "#000";
    button1SelectedMenuDisplayUser.style.color = "#000";
    button4SelectedMenuDisplayUser.style.color = "#000";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    if (window.matchMedia("(max-width: 479px)").matches) {
        menuPanelControl();
    }

    toPage();
}

function sectionShoppingDetailPopUp() {
    shoppingDetailPopUp.style.display = "flex";

    document.body.style.overflow = "hidden";
}
function sectionShoppingDetailClosedPopUp() {
    shoppingDetailPopUp.style.display = "none";

    document.body.style.overflow = "auto";
}

function sectionShoppingCart() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        shoppingCart.style.display = "block";
    } else {
        shoppingCart.style.display = "flex";

        closeMenuNavBarMquery();
    }

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";
    spanMenuPanelControlContainer.style.display = "none";

    closeMenuNav();
    toPage();
}

function sectionAboutUs() {
    if (window.matchMedia("(min-width: 480px)").matches) {
        aboutUs.style.display = "block";
    } else {
        aboutUs.style.display = "flex";
        spanMenuPanelControlContainer.style.display = "none";
    }
    

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNavBarMquery();
    closeMenuNav();
    toPage();
}

function sectionAboutUsFromMenu() {
    aboutUs.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    menuNavHeader();
    toPage();
}

function sectionProductDescription() {
    ProductDescription.style.display = "flex";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";
    spanMenuPanelControlContainer.style.display = "none";

    closeMenuNav();
    toPage();
}

function sectionCategories() {
    categories.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";
    spanMenuPanelControlContainer.style.display = "none";

    closeMenuNav();
    closeMenuNavBarMquery();
    closeButtonFilterCategories();
    closeListCategories();

    if(categories.style.display === "block") {
        specialCategoryList.style.display = "none";
        subcategoryList.style.display = "none";
        priceCategoriesList.style.display = "none";

        specialCategoryArrow.style.transform = 'rotate(0deg)';
        subcategoryListArrow.style.transform = 'rotate(0deg)';
        priceCategoriesListArrow.style.transform = 'rotate(0deg)';
    }

    toPage();
}

function buttonSpecialCategory() {
    if (specialCategoryList.style.display === "block") {
        specialCategoryList.style.display = "none";

        specialCategoryArrow.style.transform = 'rotate(0deg)';
    } else {
        specialCategoryList.style.display = "block";

        specialCategoryArrow.style.transform = 'rotate(180deg)';
    }
}

function buttonSubcategoryList() {
    if (subcategoryList.style.display === "block") {
        subcategoryList.style.display = "none";

        subcategoryListArrow.style.transform = 'rotate(0deg)';
    } else {
        subcategoryList.style.display = "block";

        subcategoryListArrow.style.transform = 'rotate(180deg)';
    }
}

function buttoPriceCategoriesList() {
    if (priceCategoriesList.style.display === "block") {
        priceCategoriesList.style.display = "none";

        priceCategoriesListArrow.style.transform = 'rotate(0deg)';
    } else {
        priceCategoriesList.style.display = "block";

        priceCategoriesListArrow.style.transform = 'rotate(180deg)';
    }
}

function closeListCategories() {
    if (specialCategoryList.style.display === "block") {
        specialCategoryList.style.display = "none";

        specialCategoryArrow.style.transform = 'rotate(0deg)';
    }

    if (subcategoryList.style.display === "block") {
        subcategoryList.style.display = "none";

        subcategoryListArrow.style.transform = 'rotate(0deg)';
    }

    if (priceCategoriesList.style.display === "block") {
        priceCategoriesList.style.display = "none";

        priceCategoriesListArrow.style.transform = 'rotate(0deg)';
    }
}

function sectionRewardZone() {
    rewardZone.style.display = "block";
    
    if (window.matchMedia("(max-width: 479px)").matches) {
        spanMenuPanelControlContainer.style.display = "flex";

        button3SelectedMenuDisplayUser.style.color = "#000";
        button2SelectedMenuDisplayUser.style.color = "#000";
        button1SelectedMenuDisplayUser.style.color = "#000";
        button4SelectedMenuDisplayUser.style.color = "#057A10";

        closeMenuNavBarMquery();
        menuPanelControl();

        for (const menuDisplayPanelControl of menuDisplayPanelControls) {
            if (menuDisplayPanelControl.style.display === "block") {
            
            menuDisplayPanelControl.style.display = "none";

            document.body.style.overflow = "auto";

            for (const path of pathElements) {
                path.setAttribute("fill", "black");
            }

            menuPanelControlTitle.style.color = "#000";
        }
    }    
}

    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    document.body.style.overflow = "auto";
    contact.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNav();
    toPage();
}

function sectionContact() {
    
    if (window.matchMedia("(min-width: 480px)").matches) {
        contact.style.display = "block";
    } else {
        contact.style.display = "block";
        spanMenuPanelControlContainer.style.display = "none";
    }

    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNavBarMquery();
    closeMenuNav();
    toPage();
}

function sectionContactFromMenu() {
    contact.style.display = "block";

    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    menuNavHeader();
    toPage();
}

function sectionLoyaltyProgram() {
    
    if (window.matchMedia("(min-width: 480px)").matches) {
        loyaltyProgram.style.display = "block";
    } else {
        loyaltyProgram.style.display = "block";
        spanMenuPanelControlContainer.style.display = "none";

        menuPanelControl();
    }
    
    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    contact.style.display = "none";
    spinDaily.style.display = "none";

    closeMenuNavBarMquery();
    closeMenuNav();
    toPage();
}

function sectionSpinDailyFromMenu() {
    spinDaily.style.display = "block";

    if (window.matchMedia("(max-width: 479px)").matches) {
        spanMenuPanelControlContainer.style.display = "flex";

        button3SelectedMenuDisplayUser.style.color = "#000";
        button2SelectedMenuDisplayUser.style.color = "#000";
        button1SelectedMenuDisplayUser.style.color = "#000";

        closeMenuNavBarMquery();
    }

    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";

    menuNavHeader();
    closeMenuNav();
    closeMenuPanelControl();
    toPage();
}

function menuPanelControl() {
    for (const menuDisplayPanelControl of menuDisplayPanelControls) {
        if (menuDisplayPanelControl.style.display === "block") {
        
        menuDisplayPanelControl.style.display = "none";

        document.body.style.overflow = "auto";

        editDirectionContainer1.style.filter = "none";
        editDirectionContainer1.style.background = "#20B52633";

        for (const path of pathElements) {
            path.setAttribute("fill", "black");
        }

        menuPanelControlTitle.style.color = "#000";

        } else {
        menuDisplayPanelControl.style.display = "block";

        document.body.style.overflow = "hidden";

        editDirectionContainer1.style.filter = "blur(4.5px)";
        editDirectionContainer1.style.background = "#20B52633";
        
        for (const path of pathElements) {
            path.setAttribute("fill", "#057A10");
        }

        menuPanelControlTitle.style.color = "#057A10";
        }
    }    
}

function closeMenuPanelControl() {
    for (const menuDisplayPanelControl of menuDisplayPanelControls) {
        if (menuDisplayPanelControl.style.display === "block") {
            menuDisplayPanelControl.style.display = "none";
            menuPanelControlTitle.style.color = "#000";

            for (const path of pathElements) {
                path.setAttribute("fill", "black");
            }
        } 
    }  
}

function buttonMyAccountPanelControl() {
    contentPanelControl.style.display = "block";
    userAccount.style.display = "flex";

    button1SelectedMenuDisplayUser.style.color = "#057A10";
    button2SelectedMenuDisplayUser.style.color = "#000";
    button3SelectedMenuDisplayUser.style.color = "#000";
    button4SelectedMenuDisplayUser.style.color = "#000";

    contentUserAccountContainer.style.display = "none";
    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    menuPanelControl();
}

function buttonMyDataPanelControl() {
    contentUserAccountContainer.style.display = "flex";
    userAccount.style.display = "flex";

    button2SelectedMenuDisplayUser.style.color = "#057A10";
    button3SelectedMenuDisplayUser.style.color = "#000";
    button1SelectedMenuDisplayUser.style.color = "#000";
    button4SelectedMenuDisplayUser.style.color = "#000";

    contentPanelControl.style.display = "none";
    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    onLoad.style.display = "none";
    rewardZone.style.display = "none";
    aboutUs.style.display = "none";
    contact.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";

    menuPanelControl();
}

function menuNavBarMquery() {
    menuNavMquery.style.display = "flex";

    document.body.style.overflow = "hidden";

    
    if(topDealProductMenuNavMquery.style.display === "flex") {
        topDealProductMenuNavMquery.style.display = "none";
    }
    if(myProfileOptionsMenuNavMquery.style.display === "flex") {
        myProfileOptionsMenuNavMquery.style.display ="none";
    }

    closeMenuPanelControl();
    closeButtonFilterCategories();
    closeListCategories();
}

function closeMenuNavBarMquery() {
    menuNavMquery.style.display = "none";

    document.body.style.overflow = "auto";
}

function myProfileMenuNavBarMquery() {
    if (myProfileOptionsMenuNavMquery.style.display === "flex") {  
        myProfileOptionsMenuNavMquery.style.display = "none";
    } else {
        myProfileOptionsMenuNavMquery.style.display = "flex";
    }

    if(topDealProductMenuNavMquery.style.display === "flex") {
        topDealProductMenuNavMquery.style.display = "none";
    }
}

function productsMenuNavBarMquery() {
    if (topDealProductMenuNavMquery.style.display === "flex") {  
        topDealProductMenuNavMquery.style.display = "none";
    } else {
        topDealProductMenuNavMquery.style.display = "flex";
    }

    if(myProfileOptionsMenuNavMquery.style.display === "flex") {
        myProfileOptionsMenuNavMquery.style.display = "none";
    }
}

let counterItemNumber = 0;

const setCounterProduct = () => {
    counterItemNumber1.textContent = counterItemNumber;
    counterItemNumber2.textContent = counterItemNumber;
}

function buttonAddCartShopping() {
    
    counterItemNumber++;

    setCounterProduct();

    if(counterItemNumber > 0) {
        counterItemNumber1.style.backgroundColor = "#057A10";
    }

    if(counterItemNumber > 0) {
        counterItemNumber2.style.backgroundColor = "#057A10";
    }
}

function buttonBackPanelControl() {
    homeSection.style.display = "block";

    ProductDescription.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
    contact.style.display = "none";
    aboutUs.style.display = "none";
    loyaltyProgram.style.display = "none";
    spinDaily.style.display = "none";
    spanMenuPanelControlContainer.style.display = "none";
}

function buttonFilterCategoriesMquery() {
    if (filterCategoriesMquery.style.display === "block") {
        filterCategoriesMquery.style.display = "none";
    } else {
        filterCategoriesMquery.style.display = "block";
    }

    closeListCategories();
}

function closeButtonFilterCategories() {
    if (filterCategoriesMquery.style.display === "block") {
        filterCategoriesMquery.style.display = "none";
    } 
}

function loginMqueryMenu() {
    closeBagMenuNavButton2Mquery.style.display = "flex";
    buttonLogoutMenuNavMquery.style.display = "block";

    buttonsLoginRegisterMenuNavMquery.style.display = "none";
}

function logoutMqueryMenu() {
    buttonsLoginRegisterMenuNavMquery.style.display = "flex";

    closeBagMenuNavButton2Mquery.style.display = "none";
    buttonLogoutMenuNavMquery.style.display = "none";

    closeMenuNavBarMquery();
}

function showStockFlavorContainer(productContainer, flavorContainer) {
    if (flavorContainer) {
        flavorContainer.style.display = 'block';

        const parentContainer = productContainer.closest('.content2-container2');
        if (parentContainer) { 
            parentContainer.style.borderColor = '#2C742F';
        }

        const hoveredButton = parentContainer.querySelector('.button-bag-product-container2');
        if (hoveredButton) {
        hoveredButton.style.backgroundColor = '#057A10';
        }

        const hoveredButtonBag = parentContainer.querySelectorAll('.button-bag-product-container2 svg');
        if (hoveredButtonBag) {
            for (const path of hoveredButtonBag) {
            path.setAttribute("fill", "#FFFFFF");
        }
        }
    }
}

function hideStockFlavorContainer(productContainer, flavorContainer) {
    if (flavorContainer) { 
        flavorContainer.style.display = 'none';

        const parentContainer = productContainer.closest('.content2-container2');
        parentContainer.style.borderColor = '';

        const hoveredButton = parentContainer.querySelector('.button-bag-product-container2');
        if (hoveredButton) {
        hoveredButton.style.backgroundColor = '#F2F2F2';
        }
    }
}

content2Container2.forEach((productContainer, index) => {
    const correspondingFlavorContainer = stockFlavorContainers[index];

    productContainer.addEventListener('mouseover', () => showStockFlavorContainer(productContainer, correspondingFlavorContainer));
    
    productContainer.addEventListener('mouseout', () => hideStockFlavorContainer(productContainer, correspondingFlavorContainer)); 

    if (window.matchMedia("(max-width: 479px)").matches) {
        productContainer.addEventListener('touchstart', () => showStockFlavorContainer(productContainer, correspondingFlavorContainer));
    
        productContainer.addEventListener('touchend', () => hideStockFlavorContainer(productContainer, correspondingFlavorContainer));
    }  
});


