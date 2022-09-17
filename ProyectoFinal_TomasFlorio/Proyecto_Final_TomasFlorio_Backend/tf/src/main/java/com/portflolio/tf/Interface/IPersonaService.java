/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portflolio.tf.Interface;

import com.portflolio.tf.Entity.Persona;
import java.util.List;

/**
 *
 * @author tomas
 */

public interface IPersonaService {
    //
    public List<Persona> getPersona();

    public void savePersona(Persona persona);
    
    public void deletePersona(Long id);
    
    public Persona findPersona(Long id);
}

