const BASE_URL = "https://hp-api.onrender.com/api";
const POTTERDB_BASE_URL = "https://api.potterdb.com/v1";

export async function getStudent() {
  try {
    const res = await fetch(`${BASE_URL}/characters/students`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Student error:", err.message);
    return [];
  }
}

export async function getStaff() {
  try {
    const res = await fetch(`${BASE_URL}/characters/staff`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Staff error:", err.message);
    return [];
  }
}

export async function getSpells() {
  try {
    const res = await fetch(`${BASE_URL}/spells`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Spells error:", err.message);
    return [];
  }
}

export async function getBooks() {
  try {
    const res = await fetch(`${POTTERDB_BASE_URL}/books`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data.data; 
  } catch (err) {
    console.error("Books error:", err.message);
    return [];
  }
}

export async function getMovies() {
  try {
    const res = await fetch(`${POTTERDB_BASE_URL}/movies`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Movies error:", err.message);
    return [];
  }
}

export async function getPotions() {
  try {
    const res = await fetch(`${POTTERDB_BASE_URL}/potions`);
    if (!res.ok) throw new Error("Network error!");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Potions error:", err.message);
    return [];
  }
}
