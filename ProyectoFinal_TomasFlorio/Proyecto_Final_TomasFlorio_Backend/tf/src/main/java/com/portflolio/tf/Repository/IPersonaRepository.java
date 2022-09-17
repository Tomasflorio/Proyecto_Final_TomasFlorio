package com.portflolio.tf.Repository;

import com.portflolio.tf.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author tomas
 */
@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
