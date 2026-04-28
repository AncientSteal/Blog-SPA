export function renderRegistrationPage(container) {
    container.innerHTML = `
    <div class="flex flex-col py-24 md:py-36 my-auto gap-8 md:gap-16 items-center">
        <div class="flex flex-col gap-6 text-center">
          <span class="text-brand-700 text-base">Registration</span>
          <h2 class="text-4xl md:text-5xl font-semibold">Join to our team</h2>
          <p class="text-neutral-500">We’d love to work with you, let's start.</p>
        </div>
        <form id="registration-form" class="text-sm text-neutral-700 font-medium w-full md:w-[30vw] flex flex-col gap-2" action="" novalidate>
          <label for="login">Login</label>
          <input name="login" id="login" class="mb-3" type="text" placeholder="name">
          <label for="password">Password</label>
          <input name="password" id="password" class="mb-3" type="password" placeholder="example45!_">
          <label for="password_repeat">Repeat your password</label>
          <input name="password_repeat" id="password_repeat" class="mb-3" type="password" placeholder="password">
          <label for="email">Enter your email</label>
          <input name="email" id="email" class="mb-3" type="email" placeholder="example@mail.com">
          <label for="number">Enter your phone number</label>
          <input name="number" id="number" class="mb-3" type="number" placeholder="telephone">
          <button type="submit" class="text-base-white bg-brand-700">Registration</button>
          <button type="button" class="text-neutral-600 bg-brand-50 login-btn">I am already have been registrated</button>
        </form>
    </div>
    `
}