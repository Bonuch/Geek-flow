import {PortfolioWorker} from "~/models/PortfolioWorker";
import {PortfolioItemSectionSliderItem} from "~/models/PortfolioItemSectionSliderItem";
import {PortfolioItemSection} from "~/models/PortfolioItemSection";

export interface PortfolioItem {
    title: string,
    headBackground: string,
    tags?: Tag[],
    color: string,
    sections?: PortfolioItemSection[]|null,
    createdAt: string,
    workers?: PortfolioWorker[]|null
}