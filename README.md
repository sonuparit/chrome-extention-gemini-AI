# 🧩 Chrome Extention to increase reading area in gemini UI

## ⚠️ Problem:

*Working with AI requires sufficient space to read and connect ideas, but a restrictive UI makes it difficult to understand the full context.*

![alt text](./screenshots/screenshot01.png)

*I recently had that experience with Gemini’s UI.*

*The usable reading space felt unnecessarily constrained:*

* *A large top banner taking up vertical space*

    ![alt text](./screenshots/screenshot09.png)

* *Shadow effects in the input box hiding nearby text*

    ![alt text](./screenshots/screenshot03.png)

* *Constant disclaimer banners*

    ![alt text](./screenshots/screenshot04.png)

It was frustrating enough that I decided to fix it myself.

## 🔧  Solution:

**What I did:**

* *Opened browser DevTools and identified unwanted UI elements*
* *Took structured notes on what needed to be removed*
* *Enabled vertical tabs via chrome://flags to reclaim vertical space*

    ![alt text](./screenshots/screenshot06.png)

* *Built a lightweight Chrome extension*

    ![alt text](./screenshots/screenshot10.png)

* *Used MutationObserver to ensure the changes persist even after refresh*

    ![alt text](./screenshots/screenshot11.png)

* *Loaded my custom extention*

    ![alt text](./screenshots/screenshot05.png)

## 🚀 Result:

* *Cleaner, distraction-free interface*

    ![alt text](./screenshots/screenshot02.png)

* *Increased usable vertical space from <580px to 800px+*

    ![alt text](./screenshots/screenshot08.png)

* *Significantly better reading and interaction experience*

**This was a small side experiment, but a powerful reminder:**

### 👉 As engineers, we don’t have to accept inefficiencies — we can improve the tools we use every day.

![alt text](./screenshots/we-are-devops.png)