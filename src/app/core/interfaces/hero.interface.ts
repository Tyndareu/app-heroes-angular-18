export interface Hero {
    id: string;                 // Unique identifier (e.g., "batman")
    img: string;                // Main image (e.g., "dc-batman")
    superhero: string;          // Name of the superhero (e.g., "Batman")
    publisher: string;          // Publisher (e.g., "DC Comics")
    alter_ego: string;          // Alter ego (e.g., "Bruce Wayne")
    first_appearance: string;   // First appearance (e.g., "Detective Comics #27")
    alt_img: string | null;     // Alternative image (can be null)
}
