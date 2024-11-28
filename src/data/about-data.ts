import { Cake, Clock, Users } from "lucide-react";

const years = new Date().getFullYear() - 1995;

export const stats = [
  { icon: Clock, label: "Vjet Eksperiencë", value: years + "+" },
  // { icon: Award, label: "Çmime Fitore", value: "15+" },
  { icon: Users, label: "Konsumatorë të Lumtur", value: "100k+" },
  { icon: Cake, label: "Produkte të Bëra Çdo Ditë", value: "1000+" },
];

export const locations = [
  {
    name: "Rruga e Durrësit",
    description:
      "Dyqani ynë kryesor, ku filloi historia e Pastiçeri Lika. Ky vendndodhje përmban pjekurinë dhe kafenenë kryesore tonë, duke shërbyer pastërtia dhe kafe të freskëta çdo ditë.",
    image:
      "https://images.unsplash.com/photo-1564759298141-cef86f51d4d4?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.app.goo.gl/eBS9FvaDsihGuDQ3A",
  },
  {
    name: "Pallatet Çabej",
    description:
      "E vendosur në lagjen më të njohur të Tiranës, kjo vendndodhje moderne kombinon preferencat tradicionale me kulturën bashkëkohore të kafenesë.",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.app.goo.gl/A8BgK8AuAgZH8SZM7",
  },
  {
    name: "Rruga Xhanfize Keko",
    description:
      "E vendosur në lagjen më të njohur të Tiranës, kjo vendndodhje moderne kombinon preferencat tradicionale me kulturën bashkëkohore të kafenesë.",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80",
    mapUrl: "https://maps.app.goo.gl/iuny9Zan5aaVMDZA6",
  },
];

export const timeline = [
  {
    year: "1995",
    title: "Fillimi",
    description: "Themeluar si një pjekuri familjare e vogël në Tiranë",
  },
  {
    year: "2005",
    title: "Zgjerimi i Parë",
    description: "Hapur vendndodhja jonë e dytë në Pallatet Çabej",
  },
  {
    year: "2015",
    title: "Inovacioni",
    description:
      "Prezantuam pastërtitë moderne europiane duke mbajtur recetat tradicionale",
  },
  {
    year: "2020",
    title: "Kapitali i Ri",
    description:
      "Hapur vendndodhja jonë e tretë me një kuzhinë me koncept të hapur",
  },
];
