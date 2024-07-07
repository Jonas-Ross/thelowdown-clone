import { writable } from 'svelte/store';
import { ThemeEnum } from '$lib/stores/theme-enum';

export const siteTheme = writable(ThemeEnum.Dark);
