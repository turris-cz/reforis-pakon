/*
 * Copyright (C) 2020 CZ.NIC z.s.p.o. (http://www.nic.cz/)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import Pakon from "./Pakon/Pakon";

const PakonPlugin = {
    name: _("Pakon"),
    weight: 100,
    submenuId: "pakon",
    path: "/pakon",
    component: Pakon,
    icon: "cube",
};

ForisPlugins.push(PakonPlugin);
