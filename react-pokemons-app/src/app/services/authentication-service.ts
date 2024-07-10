export let isAuthenticated = false;

export async function login(
  username: string,
  password: string
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      isAuthenticated = username === 'pikachu' && password === 'pikachu';
      resolve(isAuthenticated);
    }, 1000);
  });
}
