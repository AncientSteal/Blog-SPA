export function renderLoginPage(container) {
    container.innerHTML = `
    <div class="flex flex-col py-24 md:py-36 my-auto gap-8 md:gap-16 items-center">
        <div class="flex flex-col gap-6 text-center">
          <span class="text-brand-700 text-base">Login</span>
          <h2 class="text-4xl md:text-5xl font-semibold">Get in touch</h2>
          <p class="text-neutral-500">We’d love to work with you, let's start.</p>
        </div>
        <form id="login-form" class="text-sm text-neutral-700 font-medium w-full md:w-[30vw] flex flex-col gap-2" action="" novalidate>
          <label for="login">Login</label>
          <input name="login" id="login" class="mb-1" type="text" placeholder="name">
          <label for="password">Password</label>
          <input name="password" id="password" class="mb-1" type="password" placeholder="example45!_">
          <button type="submit" class="text-base-white bg-brand-700">Login</button>
          <button type="button" class="text-neutral-600 bg-brand-50 registration-btn">Registration</button>
        </form>
    </div>
    `
}