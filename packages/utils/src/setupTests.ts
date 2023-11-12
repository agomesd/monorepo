import "@testing-library/jest-dom/extend-expect";
import createFetchMock from "vitest-fetch-mock";
import { vi } from "vitest";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  removeEventListener: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: vi.fn(),
});
