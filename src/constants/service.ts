import bodyshaping from "assets/images/services/bodyshaping.webp";
import botox from "assets/images/services/botox.webp";
import hyaluron from "assets/images/services/hyaluron.webp";
import microneedling from "assets/images/services/microneedling.webp";
import musclebuilding from "assets/images/services/musclebuilding.webp";
import prpskin from "assets/images/services/prpskin.webp";
import prphair from "assets/images/services/prphair.webp";
import radiofrequency from "assets/images/services/radiofrequency.webp";
import weightloss from "assets/images/services/weightloss.webp";

export interface ServiceType {
  name: string;
  note?: string;
  description: string;
  image: string;
  slug: string;
}

const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-+|-+$/g, ""); // Trim hyphens from the start and end
};

const services: ServiceType[] = [
  {
    name: "Botox Treatments",
    note: "Revitalizing Facial Therapy",
    description: `A cosmetic procedure that reduces the appearance of fine lines and wrinkles by temporarily relaxing facial muscles, resulting in a smoother, more youthful look.`,
    image: botox,
    slug: createSlug("Botox Treatments"),
  },
  {
    name: "Hyaluron Treatments",
    image: hyaluron,
    description: `These involve the use of hyaluronic acid-based fillers to add volume, hydrate the skin, and smooth out wrinkles, improving facial contours.`,
    slug: createSlug("Hyaluron Treatments"),
  },
  {
    name: "Microneedling",
    image: microneedling,
    description: `A minimally invasive treatment that stimulates collagen production by creating micro-injuries on the skin, improving texture, tone, and reducing scars and signs of aging.`,
    slug: createSlug("Microneedling"),
  },
  {
    name: "Radiofrequency Treatments",
    image: radiofrequency,
    description: `These non-invasive procedures use radiofrequency energy to tighten the skin, reduce cellulite, and enhance skin elasticity by stimulating collagen production.`,
    slug: createSlug("Radiofrequency Treatments"),
  },
  {
    name: "Body Shaping Treatments",
    description: `These are designed to contour and sculpt the body by reducing fat, tightening skin, and improving muscle definition.`,
    image: bodyshaping,
    slug: createSlug("Body Shaping Treatments"),
  },
  {
    name: "Weight Loss Programs",
    description: `Comprehensive programs designed to help you achieve your weight loss goals through personalized plans, nutritional guidance, and support.`,
    image: weightloss,
    slug: createSlug("Weight Loss Programs"),
  },
  {
    name: "Muscle Building Treatments",
    description: `These non-invasive treatments use technology to stimulate muscle contractions, helping to tone and strengthen muscles without the need for intense physical workouts`,
    image: musclebuilding,
    slug: createSlug("Muscle Building Treatments"),
  },
  {
    name: "PRP for Skin Rejuvenation",
    description: `This treatment uses the client's own plasma, rich in growth factors, to stimulate collagen production, improve skin texture, and reduce signs of aging. It helps rejuvenate the skin, making it appear more youthful, firm, and radiant.`,
    image: prpskin,
    slug: createSlug("PRP for Skin Rejuvenation"),
  },
  {
    name: "PRP for Hair Growth",
    description: `PRP is also used to stimulate hair follicles and promote hair regrowth in areas affected by thinning or hair loss. It enhances hair density and thickness, offering a natural solution for clients seeking fuller, healthier hair.`,
    image: prphair,
    slug: createSlug("PRP for Hair Growth"),
  },
];

export default services;
