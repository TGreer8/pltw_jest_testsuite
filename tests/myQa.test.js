const{Builder, By, Key, until, WebElement, Browser, ChromiumWebDriver, File, logging, Actions} = require("selenium-webdriver");


// Login Test Selectors//////////////////////////////////
const usernameInput = By.xpath("//input[@id='idp-discovery-username']");
const submitBtn = By.id("idp-discovery-submit");
const passwordInput = By.xpath("//input[@id='okta-signin-password']");
const signinBtn = By.id("okta-signin-submit");
const h1 = By.xpath("//strong[normalize-space()='Taylor!']");
// Logout Test Selectors////////////////////////////////
const title = By.xpath("//img[@class='auth-org-logo']");
// My Sites Selectors///////////////////////////////////
const mySitesBtn = By.xpath("//button[normalize-space()='My Sites']");
const ben_And_Kyle_Test_School = By.xpath("//a[@id='28312']//p[@class='body__siteSubHeader___3qaMb']");
const classBtn = By.xpath("//a[@id='sites-site-sidebar-link-classes']");
const historicClassBtn = By.xpath("//a[normalize-space()='Historic Classes']");
const userBtn = By.xpath("//a[@id='sites-site-sidebar-link-users']");
const siteInfoBtn = By.xpath("//a[@id='sites-site-sidebar-link-siteInfo']");
const siteProfileBtn = By.css("#sites-site-sidebar-link-siteProfile");
const accountInfoBtn = By.xpath("//a[@id='sites-sidebar-link-accountInfo']");
const surveyResultsBtn = By.css("#sites-sidebar-link-surveyResults");
const userBtn2 = By.css("#sites-sidebar-link-users");
const siteProfileBtn2 = By.xpath("//a[@id='sites-sidebar-link-siteProfile']")
const dropDownList = By.xpath("//div[@id='header-menu-accounts']");
const pltwStaffDistrict = By.xpath("//span[normalize-space()='PLTW Staff District']");

// Grants Selectors///////////////////////////////////////
const grantsBtn = By.xpath("//a[@id='grants']//div[@class='modules__iconHolder___1VSXF']"); 
const startAppBtn = By.xpath("(//button[normalize-space()='Start an Application'])[1]");
const selectSiteInput = By.xpath("//div[@id='grants-grantsmodal-select-site']");
const benAndKyleSchool = By.xpath("//li[normalize-space()='Ben and Kyle Test School']");
const selectProgramInput = By.xpath("//div[@id='grants-grantsmodal-select-program']");
const bioScience = By.xpath("//li[normalize-space()='PLTW Biomedical Science (9-12)']");
const startAppBtn2 = By.xpath("(//button[normalize-space()='Start Application'])[1]");
const primaryContactBtn = By.css("#grants-contactInfo-field-primaryContactSelf");
const firstNameInput = By.xpath("//input[@id='grants-contactInfo-field-seondaryContactFirstName']");
const lastNameInput = By.xpath("//input[@id='grants-contactInfo-field-seondaryContactLastName']");
const emailInput = By.xpath("//input[@id='grants-contactInfo-field-seondaryContactEmail']");
const contactRole_Drop_Down = By.xpath("//div[@id='grants-contactInfo-field-secondaryContactRole']");
const itProBtn = By.xpath("//li[normalize-space()='IT Professional']");
const phoneInput = By.xpath("//input[@id='grants-contactInfo-field-seondaryContactPhone']");
const heardAbout_Drop_Down = By.xpath("//div[@id='grants-contactInfo-field-heardAboutPLTW']");
const existingPltwBtn = By.xpath("//li[normalize-space()='Existing PLTW School']");
const saveAndContinueBtn = By.xpath("//div[@id='grants-application-footer']//button[@type='button'][normalize-space()='Save and Continue']");
const orgType_Drop_Down = By.xpath("//div[@id='grants-orgProfile-field-orgType']");
const publicSchoolBtn = By.xpath("//li[normalize-space()='Public School']");
const trainingBtn = By.xpath("//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root grants-application__cardStyle___1r35- grants-application__multiColumn___2BW-6 css-12v74ge-MuiPaper-root-MuiCard-root']//div[1]//div[1]//label[1]//span[1]//input[1]");
const gradeBtn = By.xpath("//input[@id='grants-orgProfile-check-grade11th']");
const totalEnrollInput = By.xpath("//input[@id='grants-orgProfile-field-enrollment']");
const americanIndian_AlaskanInput = By.xpath("//input[@id='grants-orgProfile-field-raceAmerIndianAlaskan']");
const asianPacificIslanderInput = By.xpath("//input[@id='grants-orgProfile-field-raceAsianPacificIslander']");
const africanAmericanInput = By.xpath("//input[@id='grants-orgProfile-field-raceAfricanAmerican']");
const latinoInput = By.xpath("//input[@id='grants-orgProfile-field-raceLatino']");
const itStaffBtn = By.xpath("//input[@id='grants-implementing-invPlanning-a-2']");
const itStaffBtn2 = By.xpath("//input[@id='grants-implementing-invPlanning-prepTech']");
const refInput = By.xpath("//textarea[@id='grants-implementing-descSupport']");
const describeInput = By.xpath("//textarea[@id='grants-implementing-selectTeacher']");
const gradeBtn2 = By.xpath("//input[@id='grants-implementing-avail11th']");
const schedulingInput = By.xpath("//textarea[@id='grants-implementing-planScheduling']");
const attendanceDrop_Down = By.xpath("//div[@id='grants-implementing-attendanceOptions']");
const yesBtn = By.xpath("//li[contains(text(),'Yes, all students at our school are required to pa')]");
const describeInput2 = By.xpath("//textarea[@id='grants-implementing-underrepresentedPopulations']");
const participationDrop_Down = By.xpath("//div[@id='grants-implementing-participationReq']");
const noBtn = By.xpath("//li[normalize-space()='No']");
const participationDrop_Down2 = By.xpath("//div[@id='grants-implementing-respPay']");
const visionInput = By.xpath("//textarea[@id='grants-growing-text-vision']");
const financialSupportInput = By.xpath("//textarea[@id='grants-growing-text-financialSupport']");
const criticalBtn = By.xpath("//input[@value='Critical']");
const grantSubmitBtn = By.xpath("//div[@id='grants-application-footer']//span[@class='MuiButton-label'][normalize-space()='Save and Submit']");

// Roster Selectors /////////////////////////////////////////
const rosterBtn = By.xpath("//span[normalize-space()='Roster Students CSV']");
const uploadFileInput = By.xpath("//input[@id='upload-file']");

// Create Educator Selectors ////////////////////////////////
const createEducatorBtn = By.xpath("//a[normalize-space()='Create Educator Account']");
const createUsernameInput = By.xpath("//input[@id='registration-username']");
const createFirstNameInput = By.xpath("//input[@id='registration-firstName']");
const createLastNameInput = By.xpath("//input[@id='registration-lastName']");
const createPhoneNumberInput = By.xpath("//input[@id='registration-phone']");
const createEmailInput = By.xpath("//input[@id='registration-email']");
const stateDrop_Down = By.xpath("//div[@id='registration-state']");
const gaBtn = By.xpath("(//li[normalize-space()='GA'])[1]");
const cityInput = By.xpath("//input[@id='registration-city']");
const describeDrop_Down = By.xpath("//div[@id='registration-describeYou']");
const teacherBtn = By.xpath("//li[normalize-space()='Teacher']");
const skipBtn = By.xpath("//a[normalize-space()='Skip for Now']");
const agreeBtn = By.xpath("//input[@id='registration-iAgree']"); 
const createAccountBtn = By.xpath("//button[@id='registration-button-submit']");

// Create Student Selectors /////////////////
const createStudentBtn = By.xpath("//a[normalize-space()='Create Student Account']");
const nickNameInput = By.xpath("//input[@id='mui-1']");
const birthDateInput = By.xpath("(//*[name()='svg'][@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1xr2tn8-MuiSvgIcon-root'])[1]");
const birthDateChoice = By.css("button[aria-label='Feb 2, 2023']");
const okBtn = By.xpath("//span[normalize-space()='OK']");
const createParentEmailInput = By.xpath("(//input[@id='mui-3'])[1]");
const nextBtn = By.xpath("//button[normalize-space()='Next']");
const createStudentUsernameInput = By.xpath("//input[@id='mui-4']");
const createStudentPasswordInput = By.xpath("//input[@type='password']");
const createStudentSubmitBtn = By.xpath("//button[normalize-space()='Submit']");

// Announcment Selectors////
const seeAllBtn = By.xpath("//a[normalize-space()='See All']");
const summitBtn = By.xpath("//h5[contains(text(),'PLTW Summit (test) | 2018-19 Dates, Locations, and')]");
const summitLink = By.xpath("//b[normalize-space()='PLTW Summit']");

// PD Selectorts/////
const pdBtn = By.xpath("//div[@class='modules__paddingLeftPdIcon___2bvlJ']//*[name()='svg']");

///My Profile Selectors//////////////
const personIcon = By.xpath("//span[@class='header__spacer___1nTqq']");
const myProfilelink = By.xpath("//li[@value='My Profile']//a");
const contactUslink = By.xpath("//li[@value='Contact Us']//a");
const adminArealink = By.xpath("//div[contains(text(),'Admin Area')]");
const rosterHistorylink = By.xpath("//a[@href='/admin/roster-history']//div//*[name()='svg']");
const backtoadminArealink = By.xpath("//button[normalize-space()='Admin Area']");
const elevatedAccesslink = By.xpath("//*[name()='path' and contains(@d,'M5 4v2h14V')]");
const logOutlink = By.xpath("//div[contains(text(),'Logout')]");

//navigationLinks Selectors//////////////
const coursesTab = By.xpath("//span[normalize-space()='Courses']");
const professionaldevelopmentTab = By.xpath("//span[normalize-space()='Professional Development']");
const storeTab = By.xpath("//span[normalize-space()='Store']");
const communityTab = By.xpath("//span[normalize-space()='Community']");
const helpTab = By.xpath("//span[normalize-space()='Help']");

//programrecognitionTab Selectors///////////
const programrecognitionTab = By.xpath("//span[normalize-space()='Program Recognition']");
const pltwlaunchFilter = By.xpath("//span[normalize-space()='PLTW Launch']");
const pltwgatewayFilter = By.xpath("//span[normalize-space()='PLTW Gateway']");
const pltwhighschoolFilter = By.xpath("//span[normalize-space()='PLTW High School']");
const pltwdistrictFilter = By.xpath("//span[normalize-space()='PLTW District']");
const allprogramsFilter = By.xpath("//span[normalize-space()='All Programs']");
const mypltwIcon = By.xpath("//div[@class='header__logo___3IpPZ']//*[name()='svg']");

//cyberConsole Selctors//////
const pltwHighSchool = By.xpath("//h3[normalize-space()='PLTW High School']");
const cyberLabConsoleBtn = By.xpath("//a[@id='sites-site-sidebar-link-cyberManagement']");

//CyberCalendar////
const calendarDate = By.xpath("(//td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium Cell-cell css-1csev4g-MuiTableCell-root'])[28]");


jest.setTimeout(100000);




describe('Regression tests for myPLTW QA site', () => {
   
    test('login', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.quit();
    
   
    

    });
    
    test('logout', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(By.xpath("//span[@class='header__spacer___1nTqq']")), 30000);
        await driver.findElement(By.xpath("//span[@class='header__spacer___1nTqq']")).click();
        await driver.wait(until.elementLocated(By.xpath("//li[@value='Logout']")), 30000);
        await driver.findElement(By.xpath("//li[@value='Logout']")).click();
        expect(title).toBeTruthy();
        driver.quit();
    });

    test('my_sites', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(dropDownList), 30000);
        await driver.findElement(dropDownList).click();
        await driver.wait(until.elementLocated(pltwStaffDistrict), 30000);
        await driver.findElement(pltwStaffDistrict).click();
        await driver.wait(until.elementLocated(mySitesBtn), 30000);
        await driver.findElement(mySitesBtn).click();
        await driver.wait(until.elementLocated(ben_And_Kyle_Test_School), 30000);
        await driver.findElement(ben_And_Kyle_Test_School).click();
        await driver.findElement(classBtn).click();
        await driver.sleep(5000);
        await driver.findElement(historicClassBtn).click();
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(userBtn), 30000);
        await driver.findElement(userBtn).click();
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(siteInfoBtn), 30000);
        await driver.findElement(siteInfoBtn).click();
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(siteProfileBtn), 30000);
        await driver.findElement(siteProfileBtn).click();
        await driver.findElement(mySitesBtn).click();
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(userBtn2), 30000);
        await driver.findElement(userBtn2).click();
        await driver.sleep(5000);
        await driver.findElement(accountInfoBtn).click();
        await driver.sleep(5000);
        await driver.wait(until.elementLocated(siteProfileBtn2), 30000);
        await driver.findElement(siteProfileBtn2).click();
        await driver.sleep(5000);
        await driver.navigate().back();
        await driver.wait(until.elementLocated(surveyResultsBtn), 30000);
        await driver.findElement(surveyResultsBtn).click();
        expect(surveyResultsBtn).toBeTruthy();
        await driver.quit();
    
    });

    test('grants', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
         await driver.wait(until.elementLocated(grantsBtn), 30000);
        await driver.findElement(grantsBtn).click();
        await driver.wait(until.elementLocated(startAppBtn), 30000);
        await driver.findElement(startAppBtn).click();
        await driver.findElement(selectSiteInput).click();
        await driver.wait(until.elementLocated(benAndKyleSchool), 30000);
        await driver.findElement(benAndKyleSchool).click();
        await driver.findElement(selectProgramInput).click();
        await driver.findElement(bioScience).click();
        await driver.findElement(startAppBtn2).click();
        await driver.wait(until.elementLocated(primaryContactBtn), 30000);
        await driver.findElement(primaryContactBtn).click();   
        await driver.findElement(firstNameInput).sendKeys("qa");
        await driver.findElement(lastNameInput).sendKeys("teacher");
        await driver.findElement(emailInput).sendKeys("taylorbgreer@gmail.com");
        await driver.findElement(contactRole_Drop_Down).click();
        await driver.findElement(itProBtn).click();
        await driver.findElement(phoneInput).sendKeys("5555555555");
        await driver.findElement(heardAbout_Drop_Down).click();
        await driver.findElement(existingPltwBtn).click();
        await driver.findElement(saveAndContinueBtn).click();
        await driver.wait(until.elementLocated(orgType_Drop_Down), 30000);
        await driver.findElement(orgType_Drop_Down).click();
        await driver.findElement(publicSchoolBtn).click();
        await driver.findElement(trainingBtn).click();
        await driver.findElement(gradeBtn).click();
        await driver.findElement(totalEnrollInput).clear();
        await driver.findElement(totalEnrollInput).sendKeys("100");
        await driver.findElement(americanIndian_AlaskanInput).clear();
        await driver.findElement(americanIndian_AlaskanInput).sendKeys("20");
        await driver.findElement(asianPacificIslanderInput).clear();
        await driver.findElement(asianPacificIslanderInput).sendKeys("30");
        await driver.findElement(africanAmericanInput).clear();
        await driver.findElement(africanAmericanInput).sendKeys("30");
        await driver.findElement(latinoInput).clear();
        await driver.findElement(latinoInput).sendKeys("20");
        await driver.findElement(saveAndContinueBtn).click();
        await driver.wait(until.elementLocated(itStaffBtn), 30000);
        await driver.findElement(itStaffBtn).click();
        await driver.findElement(itStaffBtn2).click();
        await driver.findElement(refInput).sendKeys("This is a test!");
        await driver.findElement(describeInput).sendKeys("This is a test!");
        await driver.findElement(gradeBtn2).click();
        await driver.findElement(schedulingInput).sendKeys("This is a test!");
        await driver.findElement(attendanceDrop_Down).click();
        await driver.findElement(yesBtn).click();
        await driver.findElement(describeInput2).sendKeys("This is a test!");
        await driver.findElement(participationDrop_Down).click();
        await driver.findElement(noBtn).click();
        await driver.findElement(participationDrop_Down2).click();
        await driver.findElement(noBtn).click();
        await driver.findElement(saveAndContinueBtn).click();
        await driver.wait(until.elementLocated(visionInput), 30000);
        await driver.findElement(visionInput).sendKeys("This is a Test!");
        await driver.findElement(financialSupportInput).sendKeys("This is a Test!");
        await driver.findElement(criticalBtn).click();
        await driver.findElement(saveAndContinueBtn).click();
        //await driver.wait(until.elementLocated(grantSubmitBtn), 30000);
        //await driver.findElement(grantSubmitBtn).click();
        //await driver.wait(until.elementLocated(By.xpath("//body[1]/div[3]/div[3]/div[1]/div[2]/div[1]/button[2]/span[1]")), 30000)
        //await driver.findElement(By.xpath("//body[1]/div[3]/div[3]/div[1]/div[2]/div[1]/button[2]/span[1]")).click();
        expect(saveAndContinueBtn).toBeTruthy();
        driver.quit();
    });

    test('roster', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(dropDownList), 30000);
        await driver.findElement(dropDownList).click();
        await driver.wait(until.elementLocated(pltwStaffDistrict), 30000);
        await driver.findElement(pltwStaffDistrict).click();
        await driver.wait(until.elementLocated(mySitesBtn), 30000);
        await driver.findElement(mySitesBtn).click();
        await driver.wait(until.elementLocated(ben_And_Kyle_Test_School), 30000);
        await driver.findElement(ben_And_Kyle_Test_School).click();
        await driver.wait(until.elementLocated(rosterBtn), 30000);
        await driver.findElement(rosterBtn).click();
        await driver.wait(until.elementLocated(uploadFileInput), 30000);
        await driver.findElement(uploadFileInput).sendKeys(__dirname+"\\roster.csv");
        await driver.sleep(5000);
        expect(uploadFileInput).toBeTruthy();
        driver.quit();
    });

    test('create_teacher', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(createEducatorBtn).click();
        await driver.findElement(createUsernameInput).sendKeys("qa.teacher");
        await driver.findElement(createFirstNameInput).sendKeys("qa");
        await driver.findElement(createLastNameInput).sendKeys("teacher");
        await driver.findElement(createPhoneNumberInput).sendKeys("555-555-5555");
        await driver.findElement(createEmailInput).sendKeys("tgreer@pltw.org");
        await driver.findElement(stateDrop_Down).click();
        await driver.wait(until.elementLocated(gaBtn), 30000);
        await driver.findElement(gaBtn).click();
        await driver.findElement(cityInput).sendKeys("City");
        await driver.findElement(describeDrop_Down).click();
        await driver.findElement(teacherBtn).click();
        await driver.findElement(skipBtn).click();
        await driver.findElement(agreeBtn).click();
        await driver.findElement(createAccountBtn).click();
        expect(createAccountBtn).toBeTruthy();
        driver.quit();

    });    
      

    test('create_student', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(createStudentBtn).click();
        await driver.findElement(nickNameInput).sendKeys("qa.test");
        await driver.wait(until.elementLocated(birthDateInput), 30000);
        await driver.findElement(birthDateInput).click();
        await driver.wait(until.elementLocated(birthDateChoice), 30000);
        await driver.findElement(birthDateChoice).click();
       // await driver.wait(until.elementLocated(okBtn), 30000);
        //await driver.findElement(okBtn).click();
        await driver.findElement(createParentEmailInput).sendKeys("tgreer@pltw.org");
        await driver.findElement(nextBtn).click();
        await driver.wait(until.elementLocated(createStudentUsernameInput), 30000);
        await driver.findElement(createStudentUsernameInput).sendKeys("qa.student123");
        await driver.findElement(createStudentPasswordInput).sendKeys('Test123!');
        await driver.findElement(createStudentSubmitBtn).click();
        expect(createStudentSubmitBtn).toBeTruthy();
        await driver.quit();

    });

    test('announcments', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(seeAllBtn), 30000);
        await driver.findElement(seeAllBtn).click();
        await driver.wait(until.elementLocated(summitBtn), 30000);
        await driver.findElement(summitBtn).click();
        await driver.wait(until.elementLocated(summitLink), 30000);
        const originalWindow = await driver.getWindowHandle();
        await driver.findElement(summitLink).click();
        await driver.sleep(5000);
        await driver.switchTo().window(originalWindow);
        await driver.sleep(5000);
        await driver.quit();

    });

    test('professionalDevelopment', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(pdBtn), 30000);
        await driver.findElement(pdBtn).click();
        await driver.sleep(5000);
        driver.navigate().back();
        await driver.quit();

    });

        
    test('myProfile', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(personIcon), 30000);
        await driver.findElement(personIcon).click();
        await driver.sleep(3000);
        await driver.findElement(myProfilelink).click();
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(personIcon), 30000);
        await driver.findElement(personIcon).click();
        await driver.sleep(3000);
        await driver.findElement(contactUslink).click();
        await driver.sleep(3000);
        await driver.wait(until.elementLocated(personIcon), 30000);
        await driver.findElement(personIcon).click();
        await driver.wait(until.elementLocated(adminArealink), 30000);
        await driver.findElement(adminArealink).click();
        await driver.sleep(3000);
        await driver.findElement(rosterHistorylink).click();
        await driver.sleep(3000);
        await driver.findElement(backtoadminArealink).click();
        await driver.sleep(3000);
        await driver.findElement(elevatedAccesslink).click();
        await driver.sleep(30000);
        await driver.findElement(backtoadminArealink).click();
        await driver.sleep(30000);
        await driver.wait(until.elementLocated(personIcon), 30000);
        await driver.findElement(personIcon).click();
        await driver.wait(until.elementLocated(logOutlink), 30000);
        await driver.findElement(logOutlink).click();
        await driver.quit();
    });
   
    test('navigationLinks', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(coursesTab), 30000);
        await driver.findElement(coursesTab).click();
        const originalWindow = await driver.getWindowHandle();
        await driver.switchTo().window(originalWindow);
        await driver.sleep(5000);
        await driver.findElement(professionaldevelopmentTab).click();
        await driver.sleep(5000);
        driver.navigate().back();
        await driver.wait(until.elementLocated(storeTab), 30000);
        await driver.findElement(storeTab).click();
        await driver.sleep(5000);
        driver.navigate().back();
        await driver.sleep(5000);
        await driver.findElement(communityTab).click();
        await driver.sleep(5000);
        driver.navigate().back();
        await driver.sleep(5000);
        await driver.findElement(helpTab).click();
        await driver.sleep(5000);
        await driver.switchTo().window(originalWindow);
        await driver.sleep(5000);
        await driver.quit();
    });
   
    test('programrecognitionTab', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(coursesTab), 30000);
        await driver.findElement(programrecognitionTab).click();
        await driver.sleep(5000);
        await driver.findElement(pltwlaunchFilter).click();
        await driver.sleep(5000);
        await driver.findElement(pltwgatewayFilter).click();
        await driver.sleep(5000);
        await driver.findElement(pltwhighschoolFilter).click();
        await driver.sleep(5000);
        await driver.findElement(pltwdistrictFilter).click();
        await driver.sleep(5000);
        await driver.findElement(allprogramsFilter).click();
        await driver.sleep(5000);
        await driver.findElement(mypltwIcon).click();
        await driver.sleep(5000);
        await driver.quit();    
    });   

        
  
    test('cyberConsole', async () => {
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(dropDownList), 30000);
        await driver.findElement(dropDownList).click();
        await driver.wait(until.elementLocated(pltwStaffDistrict), 30000);
        await driver.findElement(pltwStaffDistrict).click();
        await driver.wait(until.elementLocated(mySitesBtn), 30000);
        await driver.findElement(mySitesBtn).click();
        await driver.wait(until.elementLocated(pltwHighSchool), 30000);
        await driver.findElement(pltwHighSchool).click();
        await driver.wait(until.elementLocated(cyberLabConsoleBtn), 30000);
        await driver.findElement(cyberLabConsoleBtn).click();
        driver.quit();


    });    

    test('cyberCalendar', async () => {
        
        let driver = await new Builder().forBrowser("chrome").build();
        driver.manage().window().maximize();
        await driver.get('https://my-qa.pltw.org/login')
        await driver.findElement(usernameInput).sendKeys("qasprintidli");
        await driver.findElement(submitBtn).click();
        await driver.wait(until.elementLocated(passwordInput), 30000);
        await driver.findElement(passwordInput).sendKeys('Test@123');
        await driver.wait(until.elementLocated(signinBtn), 30000);
        await driver.findElement(signinBtn).click();
        await driver.wait(until.elementLocated(mySitesBtn), 30000);
        await driver.findElement(mySitesBtn).click();
        await driver.wait(until.elementLocated(cyberLabConsoleBtn), 30000);
        await driver.findElement(cyberLabConsoleBtn).click();
        await driver.wait(until.elementLocated(calendarDate), 30000);
        await driver.findElement(calendarDate);
       
        var targLink    = document.getElementById ("something");
        var clickEvent  = document.createEvent ('MouseEvents');
       clickEvent.initEvent ('dblclick', true, true);
       targLink.dispatchEvent (clickEvent);
       

        
       
        
        


    });    
    



    


















});

    
   
   
   
   
   

















